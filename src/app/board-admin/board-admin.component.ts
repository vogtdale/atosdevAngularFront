import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationService } from '../_services/notification.service';
import { AddCollabComponent } from '../add-collab/add-collab.component';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit, OnDestroy {

  private subscribtion: Subscription;
  besoins: any;
  listdata: MatTableDataSource<any>;
  searchKey: string;
  displayColumns: string[] = [
    'd_debut',
    'contactClient',
    'intitule',
    'site',
    'email',
    'tel',
    'd_echeance',
    'action'
  ];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private userService: UserService, private dialog: MatDialog, private notificationService: NotificationService) { }

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
        this.listdata = new MatTableDataSource(this.besoins);
        this.listdata.sort = this.sort;
        this.listdata.paginator = this.paginator;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }


  onSearchClear() {
    // tslint:disable-next-line: quotemark
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listdata.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    const dialoqConfig = new MatDialogConfig();
    dialoqConfig.disableClose = false;
    dialoqConfig.autoFocus = true;
    dialoqConfig.width = '90%';
    dialoqConfig.height = '90%';
    this.dialog.open(AddCollabComponent, dialoqConfig);

  }

  edit(id: number) {

    return this.userService.findCollabById(id).subscribe(
      data => {
        console.log(data);
        console.log(id);
        const dialoqConfig = new MatDialogConfig();
        dialoqConfig.disableClose = false;
        dialoqConfig.autoFocus = true;
        dialoqConfig.width = '90%';
        dialoqConfig.height = '90%';
        this.dialog.open(AddCollabComponent, dialoqConfig);
      }
    );
  }

  supprimer(id: number) {
    if (confirm('Etes vous sur de voulior supprimer ce Collaborateur et tous ses informations ?')) {
      return this.userService.delbesoinById(id).subscribe(
        data => {
          console.log(data);
          console.log(id);
          this.notificationService.warn('! Deleted successfully');

        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
