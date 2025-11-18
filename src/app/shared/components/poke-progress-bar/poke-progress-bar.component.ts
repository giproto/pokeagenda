import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'poke-progress-bar',
    templateUrl: 'poke-progress-bar.component.html',
    styleUrl: 'poke-progress-bar.component.scss',
    imports: [
        CommonModule,
    ]
})
export class PokeProgressBarComponent 
{
    public percent = input.required<number>();
    public type = input.required<string>();
}