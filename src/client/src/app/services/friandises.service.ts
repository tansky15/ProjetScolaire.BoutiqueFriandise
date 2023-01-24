import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friandise } from '../models/friandise.model';

@Injectable({
  providedIn: 'root'
})
export class FriandiseService {
  baseUrl='http://10.30.40.121:3131/frian';
  constructor(private http:HttpClient) { }
  getAll(): Observable<Friandise[]>{
    return this.http.get<Friandise[]>(`${this.baseUrl}/friandises`);
  }
  create (data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/newFriandise`,data);
  }
  findById(_id: any):Observable<any>{
    return this.http.get<Friandise[]>(`${this.baseUrl}/lireunefriandise/${_id}`);
  }
  update(_id:any,data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/upFriandise/${_id}`,data);
  }
  deleteFriandise(_id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delFriandise/${_id}`);
  }
}

