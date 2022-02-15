import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from '../models/hero';
import {HEROES} from '../models/mock-heroes';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) {
  }

  public getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');

    return of(HEROES);
  }

  public getHero(id: number): Observable<Hero> {
    const hero: Hero = HEROES.find(item => item.id === id);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
