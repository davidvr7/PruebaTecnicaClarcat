import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Department } from '../_model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = 'https://localhost:44368/api/Departments';   

  constructor(private http: HttpClient) { }

  getAll(): Observable<Department[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.$values || [])  
    );
  } 
}
