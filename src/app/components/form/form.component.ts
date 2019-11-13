import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public bz: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  save() {
    this.dataService.save(this.bz);
  }
}
