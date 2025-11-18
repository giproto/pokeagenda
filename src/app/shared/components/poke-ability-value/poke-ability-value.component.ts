import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { PokemonEntity } from '../../../domain/entities/pokemon.entity';

@Component({
    selector: 'poke-ability-value',
    templateUrl: 'poke-ability-value.component.html',
    styleUrl: 'poke-ability-value.component.scss',
    imports: [CommonModule]
})

export class PokeAbilityComponent 
{
    public ability = input.required<string>();
    public quantity = input.required<number>();
}