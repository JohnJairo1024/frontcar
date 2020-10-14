import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Mecanico } from '../models/mecanico';


@Injectable({
  providedIn: 'root'
})
export class MacanicoService {

  private baseURL = "http://localhost:8080/api/v1/employees";


  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Mecanico[]> {
    return this.httpClient.get<Mecanico[]>(`${this.baseURL}`);
  }

  createMecanico(mecanico: Mecanico): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, mecanico);
  }

  getEmployeeById(id: number): Observable<Mecanico> {
    return this.httpClient.get<Mecanico>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, mecanico: Mecanico): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, mecanico);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
