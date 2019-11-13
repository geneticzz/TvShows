import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {TvShows} from '../../modules/TvShows';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {



  constructor(private service: DataService) { }

  ngOnInit() {
  }

  get detailShow(): TvShows {
    return this.service.detailShow;
  }
}
