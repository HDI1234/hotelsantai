import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';
import { Rooms } from '../rooms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rooms: Rooms[] = [];

  // tslint:disable-next-line: no-shadowed-variable
  constructor(public ActionsService: ActionsService) { }

  ngOnInit() {

    this.ActionsService.getAll().subscribe((data: Rooms[]) => {
      console.log(data);
      this.rooms = data;
    });
  }

}
