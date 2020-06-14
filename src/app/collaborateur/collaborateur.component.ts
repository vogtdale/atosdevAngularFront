import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  collabs: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllCollabs();
  }

  getAllCollabs() {
    return this.userService.getAllCollaborateur().subscribe(
      data => {
        this.collabs = JSON.parse(data);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

}
