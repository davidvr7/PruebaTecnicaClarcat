import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:44368/api/Users';  

  constructor(private http: HttpClient) { }

  getUserDepartment(department: string): Observable<User[]> {
    const url = `${this.apiUrl}/department/${department}`;
    return this.http.get<any>(url).pipe( 
    );
  }

  getById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  deleteById(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  update(user: User): Observable<void> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.patch<void>(url, user);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
