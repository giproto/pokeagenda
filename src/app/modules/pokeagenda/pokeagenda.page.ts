import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonCardComponent } from '../../shared/components/poke-card/poke-card.component';
import { PokemonController } from '../../domain/controllers/pokemon.controller';
import { PokemonEntity } from '../../domain/entities/pokemon.entity';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PokeLoaderComponent } from "../../shared/components/poke-loader/poke-loader.component";
import { PokeDetailsModal } from "../../shared/components/poke-details-modal/poke-details-modal.component";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'pokeagenda-page',
    templateUrl: 'pokeagenda.page.html',
    styleUrls: ['pokeagenda.page.scss'],
    imports: [PokemonCardComponent, CommonModule, ReactiveFormsModule, PokeLoaderComponent, PokeDetailsModal, FontAwesomeModule]
})

export class PokemonAgendaPage implements OnInit
{
    public pokemonAgendaList = signal<PokemonEntity[]>([]);
    public pokemonAgendaListTemp: PokemonEntity[] = [];
    public searchPokemon = new FormControl();
    public loading = signal<boolean>(false);
    public pokemonSelected: PokemonEntity;
    public iconSearch = faMagnifyingGlass;

    // * Injects
    private _pokemonController = inject(PokemonController);

    ngOnInit(): void 
    {
        this.listenChangesInputSearch();
        this.getPokemonListView();
    }

    private listenChangesInputSearch(): void
    {
        this.searchPokemon.valueChanges.subscribe({
            next: (value) =>
            {
                this.pokemonAgendaList.set(
                    this.pokemonAgendaListTemp.filter(
                        item => item.name.toUpperCase().includes(
                            value.toUpperCase()
                        )
                    )
                );
            }
        });
    }

    public getPokemonListView(): void
    {
        this.loading.set(true);
        this._pokemonController.getPokemonListController().subscribe({
            next: (resp) =>
            {
                this.pokemonAgendaList.set(resp);
                this.pokemonAgendaListTemp = resp;
                this.loading.set(false);
            },
            error: (error) =>
            {
                console.error(error);
                this.loading.set(false);
            }
        });
    }
}