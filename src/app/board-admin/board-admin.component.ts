import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  besoins: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getdetailsClient();
  }


  getdetailsClient() {
    return this.userService.getListClients().subscribe(
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
