import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PokemonAgendaPage } from './app/modules/pokeagenda/pokeagenda.page';

bootstrapApplication(PokemonAgendaPage, appConfig)
  .catch((err) => console.error(err));
