import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit, OnDestroy {

  private subscribtion: Subscription;
  besoins: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscribtion = this.getdetailsClient();
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
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
