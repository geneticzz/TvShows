import { Injectable } from '@angular/core';
import {TvShows} from '../modules/TvShows';
import {HttpClient} from '@angular/common/http';
import {isEmpty} from 'rxjs/operators';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  detailShow: TvShows;
  _shows: TvShows[] = [];
  constructor(private http: HttpClient) {
    this._shows.push(new TvShows('Breaking Bad'));

  }

  shows() {
    return this._shows;
  }

  del(show: TvShows) {
    this._shows = this._shows.filter(t => t !== show);
  }

  async save(bz: string) {
    try {
      const data = await this.http.get('http://api.tvmaze.com/singlesearch/shows?q=' + bz).toPromise();
      bz = data['name'];
      this._shows.push(new TvShows(bz));
    } catch (e) {
      alert('Diese Serie gibt es nicht.');
    }
  }

  async showDetail(show: TvShows) {
    const data = await this.http.get('http://api.tvmaze.com/singlesearch/shows?q=' + show.bz).toPromise();
    show.bz = data['name'];
    show.img = data['image']['medium'];
    show.desc = data['summary'];
    show.genre = data['genres'];
    try {
      show.releasedOn = data['network']['name'];
    } catch (e) {
      show.releasedOn = 'Keine Angabe';
    }
    try {
      show.watchableOn = data['webChannel']['name'];
    } catch (e) {
      show.watchableOn = 'Keine Angabe';
    }
    show.released = data['premiered'];
    this.detailShow = show;
  }
}
