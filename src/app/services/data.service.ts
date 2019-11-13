import { Injectable } from '@angular/core';
import {TvShows} from '../modules/TvShows';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  detailShow: TvShows;
  _shows: TvShows[] = [];
  constructor(private http: HttpClient) {
    this._shows.push(new TvShows('HALO'));

  }

  shows() {
    return this._shows;
  }

  del(show: TvShows) {
    this._shows = this._shows.filter(t => t !== show);
  }

  save(bz: string) {
    this._shows.push(new TvShows(bz));
  }

  async showDetail(show: TvShows) {
    this.detailShow = show;
    const data = await this.http.get('http://api.tvmaze.com/singlesearch/shows?q=' + show.bz).toPromise();
    show.bz = data['name'];
    show.img = data['image']['medium'];
    show.desc = data['summary'];
  }
}
