import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()//for future dependencies to be injected into the service.
export class HeroService {

  getHero(id: number): Promise<Hero> {//when given an id...
    return this.getHeroes()//...gets the array of HEROES...
    .then(heroes => heroes.find(hero => hero.id === id));//...then finds the hero within whose id matches given id
  }

  //returns the array of HEROES...from anywhere. Locally, webservice, database, etc.
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

}
