import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBolt, faBrain, faBug, faCubes, faDove, faDragon, faDroplet, faFaceSmile, faFire, faFlask, faGear, faGears, faGem, faGhost, faHandBackFist, faLayerGroup, faMoon, faTree, faUserNinja, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'poke-badge',
    templateUrl: 'poke-badge.component.html',
    styleUrl: 'poke-badge.component.scss',
    imports: [CommonModule, FontAwesomeModule]
})

export class PokeBadgeComponent implements OnInit
{
    public type = input.required<string>();
    public icon;

    ngOnInit(): void 
    {
        this.showIconType();
    }

    private showIconType():void
    {
        switch (this.type()) {
            case 'grass':
                this.icon = faTree;
                break;
            case 'fire':
                this.icon = faFire;
                break;
            case 'bug':
                this.icon = faBug;
                break;
            case 'dark':
                this.icon = faMoon;
                break;
            case 'dragon':
                this.icon = faDragon;
                break;
            case 'eletric':
                this.icon = faBolt;
                break;
            case 'fairy':
                this.icon = faWandMagicSparkles;
                break;
            case 'flying':
                this.icon = faDove;
                break;
            case 'ghost':
                this.icon = faGhost;
                break;
            case 'fighting':
                this.icon = faHandBackFist;
                break;
            case 'groud':
                this.icon = faLayerGroup;
                break;
            case 'ice':
                this.icon = faCubes;
                break;
            case 'normal':
                this.icon = faFaceSmile;
                break;
            case 'poison':
                this.icon = faFlask;
                break;
            case 'psychic':
                this.icon = faBrain;
                break;
            case 'rock':
                this.icon = faGem;
                break;
            case 'steel':
                this.icon = faGears;
                break;
            case 'water':
                this.icon = faDroplet;
                break;
        }
    }
}