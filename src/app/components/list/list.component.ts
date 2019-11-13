import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private dataService: DataService) {

  }

  get shows() {
    return this.dataService.shows();
  }

  ngOnInit() {
  }

  del(show: TvShows) {
    return this.dataService.del(show);
  }
}
