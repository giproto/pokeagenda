import { Component, input } from '@angular/core';
import { PokemonEntity } from '../../../domain/entities/pokemon.entity';
import { CommonModule } from '@angular/common';
import { PokeBadgeComponent } from "../poke-badge/poke-badge.component";

@Component({
    selector: 'poke-card',
    templateUrl: 'poke-card.component.html',
    styleUrl: 'poke-card.component.scss',
    imports: [CommonModule, PokeBadgeComponent]
})

export class PokemonCardComponent
{
    public pokemon = input.required<PokemonEntity>();
}
