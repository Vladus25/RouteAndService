import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url: string = "https://restcountries.com/v2/all"
  urlUser: string = "http://localhost:3000/utenti"

  constructor(private http:HttpClient) { }

  getCountries(){
    return this.http.get(this.url);
  }

  getName(name:any){
    return this.http.get("https://restcountries.com/v2/name/" + name);
  }

  getUsers() {
    return this.http.get<User[]>(this.urlUser);
  }

  addUser(user: User){
    return this.http.post<User>(this.urlUser, user);
  }

  deleteUser(user: User){
    const url = `${this.urlUser}/${user.id}`;
    return this.http.delete<void>(url);
  }

  updateUser(user: User): Observable<void> {
    const url = `${this.urlUser}/${user.id}`;
    return this.http.put<void>(url, user);
  }
}
