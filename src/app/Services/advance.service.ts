import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postEpAdvance } from '../extraClassAndInterface/EmpAdvance';

@Injectable({
  providedIn: 'root'
})
export class AdvanceService {

  constructor(private http:HttpClient) { }

  allEmpAdvance():Observable<any>{
    return this.http.get(`https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAdvance`);
  }

  addEmployeAdvance(advance:postEpAdvance):Observable<any>{
    return this.http.post("https://onlinetestapi.gerasim.in/api/TeamSync/AddAdvance",advance);
  }

  updateEmployeAdvance(advance:postEpAdvance){
      return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/UpdateAdvance',advance);
  }

  DeleteEmploye(EadId:number){
      return this.http.delete(`https://onlinetestapi.gerasim.in/api/TeamSync/DeleteAdvanceById?advanceid=${EadId}`)
  }
    
  
}
