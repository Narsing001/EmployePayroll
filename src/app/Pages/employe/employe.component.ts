import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/Services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
 emparray:any[]=[]
 empobj:any;
  constructor(private empserv:EmployeService ) {
    this.resetobj();
   }
   ngOnInit(): void {
    this.getAllEmploye()
  }
  resetobj(){
    this.empobj={
      "empId":0,
      "empName": " ",
      "empContactNo": " ",
      "empAltContactNo": "",
      "empEmail": "",
      "addressLine1": "",
      "addressLine2": "",
      "pincode": "",
      "city": "",
      "state": "",
      "bankName": "",
      "iFSC": "",
      "accountNo": "",
      "bankBranch": "",
      "salary": 0
    }
  }
getAllEmploye(){
   this.empserv.allemploye().subscribe((res:any)=>{
        this.emparray=res.data;
        console.log(this.emparray)
   })
}
saveEmployedata(){
  this.empserv.addemploye(this.empobj).subscribe((res:any)=>{
    debugger;  
    if(res.result){
        this.getAllEmploye();
        alert(res.message);
         this.resetobj();
       }
       else{
        alert(res.message)
       }
   })
}

getEmployeById(id:number)
{
 this.empserv.getemployebyid(id).subscribe((res:any)=>{
     this.empobj=res.data;
 })
}
updateEmploye(){
  this.empserv.getUpdateData(this.empobj).subscribe((res:any)=>{
    if(res.result){
      this.getAllEmploye();
        alert(res.message);
        this.resetobj();
    }
    else{
        alert(res.message);
    }
  })
}
deleteEmploye(id:number){
    this.empserv.DeleteEmploye(id).subscribe((res:any)=>{
      alert(res.message);
    })
}
}
