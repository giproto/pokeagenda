# PokeAgenda

Projeto de estudo em **Angular** que consome a **PokeAPI** para listar pokémons, permitir **busca por nome** e exibir um **modal com detalhes** (stats, tipo, etc).

## Stack

- **Angular 20** (componentes *standalone*, `signals`, control flow `@if/@for`)
- **RxJS** (orquestração de requests)
- **HttpClient** (consumo da PokeAPI)
- **SCSS**
- **FontAwesome**


### Mapeamento MVC no código

- **Model**
  - `src/app/domain/entities/`: entidades do domínio usadas na UI
    - `PokemonEntity`, `PokemonDetail`
  - `src/app/domain/DTOs/`: contratos de resposta da API (formato “cru”)
    - `PokemonListResponseDto`, `PokemonListResults`
- **Controller**
  - `src/app/domain/controllers/`: camada que orquestra chamadas, combina requests e transforma DTO → Entity
    - `PokemonController`
  - `src/app/domain/APIs/`: acesso a dados externos (integração HTTP com a PokeAPI)
    - `PokemonAPI`
- **View**
  - `src/app/modules/pokeagenda/`: página principal (tela) e layout
    - `PokemonAgendaPage` (`.page.ts/.html/.scss`)
  - `src/app/shared/components/`: componentes reutilizáveis de UI
    - `poke-card`, `poke-details-modal`, `poke-badge`, `poke-loader`, etc.

## Fluxo principal (do clique até a tela)

1. A aplicação inicializa direto na página `PokemonAgendaPage` (`src/main.ts`).
2. A página (View) chama `PokemonController.getPokemonListController()`.
3. O controller pede ao `PokemonAPI` a lista de pokémons (DTO com `results` e `url`).
4. O controller dispara as requisições de detalhes (uma por pokémon) e usa `forkJoin` para aguardar todas.
5. A resposta “crua” da API é convertida para `PokemonEntity` (Model da aplicação), já no formato mais amigável para a UI (nome, imagem, tipo e stats).
6. A View renderiza a lista com `poke-card` e abre `poke-details-modal` ao selecionar um item.

## Estrutura de pastas (resumo)

```text
src/app/
  domain/
    APIs/
      pokemon.api.ts
    controllers/
      pokemon.controller.ts
    DTOs/
      pokemon-list-response.dto.ts
    entities/
      pokemon.entity.ts
  modules/
    pokeagenda/
      pokeagenda.page.ts
      pokeagenda.page.html
      pokeagenda.page.scss
  shared/
    components/
      poke-card/
      poke-details-modal/
      poke-badge/
      poke-loader/
      poke-progress-bar/
      poke-ability-value/
```

## Como rodar localmente

```bash
npm install
npm start
```

Depois acesse `http://localhost:4200`.

## Scripts úteis

- **dev server**: `npm start`
- **build**: `npm run build`
- **tests**: `npm test`

## Decisões e boas práticas (o “porquê”)

- **Separação de responsabilidades**: UI fica nos componentes/páginas; orquestração e transformação ficam no controller.
- **DTO vs Entity**: o DTO representa o contrato da API; a Entity representa o que a aplicação precisa para renderizar.
- **Componentização**: componentes pequenos e reutilizáveis em `shared/components`.
