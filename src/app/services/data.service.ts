import {Injectable} from '@angular/core';
import {TvShows} from '../modules/TvShows';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  detailShow: TvShows;
  _shows: Observable<any>;
  private searchtextv2: string;

  constructor(private http: HttpClient, private af: AngularFirestore) {
    this._shows = af.collection('shows').valueChanges({idField: 'id'});
  }

  shows() {
    return this._shows;
  }

  del(show: TvShows) {
    this.af.collection('shows').doc(show.id).delete();
  }

  async save(bz: string): Promise<boolean> {
    try {
      const data = await this.http.get('http://api.tvmaze.com/singlesearch/shows?q=' + bz).toPromise();
      bz = data['name'];
      this.af.collection('shows').add({
        bz: bz,
      });
      // this._shows.push(new TvShows(bz));
      return true;
    } catch (e) {
      alert('Diese Serie gibt es nicht.');
      return false;
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
    try {
      show.released = data['premiered'];
    } catch (e) {
      show.watchableOn = 'Keine Angabe';
    }
    this.detailShow = show;
  }
}
