import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit {
  Props: string;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getAllProps();
  }

  getAllProps() {
    return this.userService.getAllPropositions().subscribe(
      data => {
        this.Props = JSON.parse(data);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

}
