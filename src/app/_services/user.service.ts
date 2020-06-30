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
  private baseUrl = 'https://atosdevbackend.herokuapp.com/clb';
  private delUrl = 'https://atosdevbackend.herokuapp.com/delclb';
  private bsnUrl = 'https://atosdevbackend.herokuapp.com/besoins';

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
    return this.http.get(url + 'besoins', { responseType: 'text' });
  }

  // Crud Besoins Clients
  getListBesoin(): Observable<any> {
    return this.http.get(url + 'besoins', { responseType: 'text' });
  }

  delbesoinById(id: number): Observable<any> {
    return this.http.delete(`${this.bsnUrl}/${id}`, {responseType: 'text'});
  }

  addBesoin(besoin): Observable<any> {
    return this.http.put(url + 'addBesoin', besoin, {responseType: 'text'});
  }

  getAllPropositions(): Observable<any> {
    return this.http.get(url + 'propositions', { responseType: 'text' });
  }

  getAllCollaborateur(): Observable<any> {
    return this.http.get(url + 'clb', { responseType: 'text' });
  }

  getListeContact(): Observable<any> {
    return this.http.get(url + 'ctc', {responseType: 'text'});
  }


  findCollabById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  delCollabById(id: number): Observable<any> {
    return this.http.delete(`${this.delUrl}/${id}`, {responseType: 'text'});
  }

  addCollab(collab): Observable<any> {
    return this.http.put(url + 'addclb', collab, {responseType: 'text'});
  }

}
