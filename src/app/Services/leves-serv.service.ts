import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postemployeleve } from '../extraClassAndInterface/EmpLeves';

@Injectable({
  providedIn: 'root'
})
export class LevesServService {

  constructor(private http:HttpClient) { }

  AllLeves():Observable<any>{
     return this.http.get(`https://onlinetestapi.gerasim.in/api/TeamSync/GetAllLeaves`)
  }

  postLeves(levesobj:postemployeleve):Observable<any>{
    return this.http.post(`https://onlinetestapi.gerasim.in/api/TeamSync/AddLeave`,levesobj)
  }

  getLevesById(id:number){
    return this.http.get(`https://onlinetestapi.gerasim.in/api/TeamSync/GetAllLeavesByEmpId?empid=${id}`)
  }
  updateEmploye(pdata:postemployeleve){
    return this.http.post(`https://onlinetestapi.gerasim.in/api/TeamSync/UpdateLeave`,pdata)
  }
}
