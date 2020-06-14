import { TokenStorageService } from './token-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://atosdevbackend.herokuapp.com/api/test/';
const url = 'https://atosdevbackend.herokuapp.com/';
const auth = sessionStorage.getItem('TOKEN_KEY');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + auth
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getListClients(): Observable<any> {
    return this.http.get(url + 'bsn_cpc', { responseType: 'text' });
  }

  getListBesoin(): Observable<any> {
    return this.http.get(url + 'besoins', { responseType: 'text' });
  }

  getAllPropositions(): Observable<any> {
    return this.http.get(url + 'propositions', { responseType: 'text' });
  }

  getAllCollaborateur(): Observable<any> {
    return this.http.get(url + 'clb_cpc', { responseType: 'text' });
  }
}
