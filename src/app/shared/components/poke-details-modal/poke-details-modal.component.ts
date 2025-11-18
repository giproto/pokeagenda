import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { PokemonEntity } from '../../../domain/entities/pokemon.entity';
import { PokeBadgeComponent } from "../poke-badge/poke-badge.component";
import { PokeAbilityComponent } from "../poke-ability-value/poke-ability-value.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'poke-details-modal',
    templateUrl: 'poke-details-modal.component.html',
    styleUrl: 'poke-details-modal.component.scss',
    imports: [CommonModule, PokeBadgeComponent, PokeAbilityComponent, FontAwesomeModule]
})

export class PokeDetailsModal
{
    public pokemon = input.required<PokemonEntity>();
    public close = output();
    public iconClose = faCircleXmark;
}
