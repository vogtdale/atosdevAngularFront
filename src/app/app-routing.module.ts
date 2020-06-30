import { AddCollabComponent } from './add-collab/add-collab.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { PropositionComponent } from './proposition/proposition.component';
import { BesoinComponent } from './besoin/besoin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AjouterContactComponent } from './ajouter-contact/ajouter-contact.component';
import { EditCollabComponent } from './edit-collab/edit-collab.component';
import { AddBesoinComponent } from './add-besoin/add-besoin.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path: 'besoin', component: BesoinComponent},
  {path: 'proposition', component: PropositionComponent},
  {path: 'collaborateur', component: CollaborateurComponent},
  {path: 'addCollab', component: AddCollabComponent},
  {path: 'ajouterContact', component: AjouterContactComponent},
  {path: 'editCollab', component: EditCollabComponent},
  { path: 'addBesoin', component: AddBesoinComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
