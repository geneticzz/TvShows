import { Injectable } from '@angular/core';
import {TvShows} from '../modules/TvShows';
import {HttpClient} from '@angular/common/http';
import {isEmpty} from 'rxjs/operators';

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
      show.watchableOn = data['network']['name'];
      this.detailShow = show;
  }
}
