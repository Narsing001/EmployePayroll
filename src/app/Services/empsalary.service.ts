import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postSalary } from '../extraClassAndInterface/EmpSalaries';

@Injectable({
  providedIn: 'root'
})
export class EmpsalaryService {

  constructor(private http:HttpClient) { }

  getEmpSalary():Observable<any>{
    return this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllSalary")
  }

  addSalary(postSalobj:postSalary):Observable<any>{
    return this.http.post("https://onlinetestapi.gerasim.in/api/TeamSync/AddSalary",postSalobj)
  }
}
