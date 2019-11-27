export class TvShows {
  id: string;
  img: string;
  desc: string;
  genre: string;
  releasedOn: string;
  watchableOn: string;
  released: string;

  constructor(public bz: string) {
    this.id = null;
    this.img = null;
    this.desc = null;
    this.genre = null;
    this.releasedOn = null;
    this.watchableOn = null;
    this.released = null;
  }
}
