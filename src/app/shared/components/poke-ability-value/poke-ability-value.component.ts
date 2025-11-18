import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PokeProgressBarComponent } from '../poke-progress-bar/poke-progress-bar.component';

@Component({
    selector: 'poke-ability-value',
    templateUrl: 'poke-ability-value.component.html',
    styleUrl: 'poke-ability-value.component.scss',
    imports: [
        CommonModule,
        PokeProgressBarComponent,
    ]
})

export class PokeAbilityComponent 
{
    public type = input.required<string>();
    public ability = input.required<string>();
    public quantity = input.required<number>();
}