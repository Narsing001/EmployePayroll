import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postAtendance } from '../extraClassAndInterface/EmpAtendance';

@Injectable({
  providedIn: 'root'
})
export class AtendanceService {

  constructor(private http:HttpClient) { }

  allEmployeAtendance():Observable<any>{
    return this.http.get(`https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAttendance`);
  }
  addAtendanceEmploye(data:postAtendance){
      return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/AddAttendance',data)
  }
  updateAtendanceEmploye(udataobj:postAtendance){    
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/UpdateAttendance',udataobj)
  }
  deleteAtendanceEmploye(eAid:number){
      return this.http.delete(`https://onlinetestapi.gerasim.in/api/TeamSync/DeleteAttendanceById?attendanceid=${eAid}`);
  }
  
}
