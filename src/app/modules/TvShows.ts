export class TvShows {
  img: string;
  desc: string;
  genre: string;
  releasedOn: string;
  watchableOn: string;
  released: string;
  constructor(public bz: string) {
    this.img = null;
    this.desc = null;
    this.genre = null;
    this.releasedOn = null;
    this.watchableOn = null;
    this.released = null;
  }
}
