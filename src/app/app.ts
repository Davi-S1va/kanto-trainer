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
   * Controla a tela
   * de carregamento
   */
  carregando = false;


  constructor(
    private router: Router
  ) {


    this.router.events
      .subscribe(event => {


        /*
         * Quando começa
         * uma navegação
         */
        if (
          event instanceof NavigationStart
        ) {

          this.carregando = true;

        }


        /*
         * Quando termina
         * uma navegação
         */
        if (
          event instanceof NavigationEnd
        ) {

          this.carregando = false;

        }


        /*
         * Caso a navegação
         * seja cancelada
         */
        if (
          event instanceof NavigationCancel
        ) {

          this.carregando = false;

        }


        /*
         * Caso aconteça
         * algum erro
         */
        if (
          event instanceof NavigationError
        ) {

          this.carregando = false;

        }


      });


  }

}