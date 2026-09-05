import {
  Component,
  signal
} from '@angular/core';

import {
  RouterOutlet,
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

import { Navbar } from './navbar/navbar';
import { Loading } from './loading/loading';

@Component({
  selector: 'app-root',

  imports: [
    Navbar,
    RouterOutlet,
    Loading
  ],

  templateUrl: './app.html',

  styleUrl: './app.css'
})
export class App {

  protected readonly title =
    signal('kanto-trainer');

  /*
   * Loading global da aplicação.
   *
   * Começa desligado.
   */
  carregando =
    signal(false);

  constructor(
    private readonly router: Router
  ) {

    this.router.events.subscribe(event => {

      console.log(
        'EVENTO DO ROUTER:',
        event.constructor.name
      );

      /*
       * ==========================
       * INÍCIO DA NAVEGAÇÃO
       * ==========================
       */

      if (
        event instanceof NavigationStart
      ) {

        console.log(
          '🟡 COMEÇOU A NAVEGAÇÃO'
        );

        this.carregando.set(true);

        return;
      }

      /*
       * ==========================
       * FIM DA NAVEGAÇÃO
       * ==========================
       */

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {

        console.log(
          '🟢 NAVEGAÇÃO TERMINADA'
        );

        setTimeout(() => {

          console.log(
            '⚪ DESLIGANDO LOADING'
          );

          this.carregando.set(false);

        }, 400);

      }

    });

  }

}