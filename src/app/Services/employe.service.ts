import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) { }
  allemploye():Observable<any>{
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllEmployee')
  }

  addemploye(obj:any):Observable<any>{

       return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/CreateEmployee',obj)
  }
  getemployebyid(empid:number){
       return this.http.get(`https://onlinetestapi.gerasim.in/api/TeamSync/GetEmployeeByEmpId?empid=${empid}`)
  }
  getUpdateData(obj:any){
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/UpdateEmployee',obj)
  }
  DeleteEmploye(eid:number){
 return this.http.delete(`https://onlinetestapi.gerasim.in/api/TeamSync/DeleteEmployeeByEmpId?empid=${eid}`)
  }
}
