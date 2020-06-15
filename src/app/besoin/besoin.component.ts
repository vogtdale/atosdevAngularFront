import { Besoin } from './../model/besoin.model';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrls: ['./besoin.component.css'],
})
export class BesoinComponent implements OnInit {
  besoins: any;
  // tslint:disable-next-line: no-inferrable-types
  term: string = '';


  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getBesoins();
  }

  getBesoins() {
    return this.userService.getListBesoin().subscribe(
      data => {
        this.besoins = JSON.parse(data);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

}
