import { Injectable } from '@angular/core';
import {TvShows} from '../modules/TvShows';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _shows: TvShows[] = [];
  constructor() {
    this._shows.push(new TvShows(1, 'HALO'));
  }

  shows() {
    return this._shows;
  }

  del(show: TvShows) {
    this._shows = this._shows.filter(t => t !== show);
  }

  save(id: number, bz: bz) {
    this._shows.push(new TvShows(id, bz));
  }
}
