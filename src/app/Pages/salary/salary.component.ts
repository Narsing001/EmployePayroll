import { Component, OnInit } from '@angular/core';
import { employedata } from 'src/app/extraClassAndInterface/empData';
import { empSaleries, postSalary } from 'src/app/extraClassAndInterface/EmpSalaries';
import { AdvanceService } from 'src/app/Services/advance.service';
import { EmployeService } from 'src/app/Services/employe.service';
import { EmpsalaryService } from 'src/app/Services/empsalary.service';
import { LevesServService } from 'src/app/Services/leves-serv.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
 empSalaryArray:empSaleries[]=[]
 empSalObj:postSalary=new postSalary()
 empdata:any[]=[];
 empbyid:any;
 totalAdvanceAmount:number=0;
 perDaySal:number=0;
  constructor(private emplsalserve:EmpsalaryService,private empserv:EmployeService,
    private leveServe:LevesServService,private advanceServe:AdvanceService) { }

  ngOnInit(): void {
    this.getslary();
   this.getemployedata();
  }

  getslary(){
    this.emplsalserve.getEmpSalary().subscribe((res:any)=>{
      this.empSalaryArray=res.data;
    }) 
   }

  SaveSalary(){
      this.emplsalserve.addSalary(this.empSalObj).subscribe((res:any)=>{
         if(res.result){
          alert(res.message);
          this.getslary();
         }
         else{
          alert(res.message);
         }
      })
  }

  getemployedata(){
 this.empserv.allemploye().subscribe((res:any)=>{
   this.empdata=res.data;
     })
  }

  getLeveAndAdvance(){
    
       this.getEmployeLeves();
       this.getEmployeAdvance();
  }

  getEmployeLeves(){
    
    this.leveServe.AllLeves().subscribe((res:any)=>{
        const levesData=res.data.filter((m:any)=> m.employeeId==this.empSalObj.employeeId).length;
        this.empSalObj.presentDays= 30-levesData;
    })
  }

  getEmployeAdvance(){
    
    this.advanceServe.allEmpAdvance().subscribe((res:any)=>{
      const data=res.data.filter((m:any)=>{
        return m.employeeId==this.empSalObj.employeeId;
      })
      data.forEach((element:any) => {
        this.totalAdvanceAmount=this.totalAdvanceAmount+element.advanceAmount;
      });
        this.empSalObj.totalAdvance=this.totalAdvanceAmount;
    })
  }

  calculateSalary(){
    // console.log(this.empSalObj.employeeId)
   this.empserv.getemployebyid(this.empSalObj.employeeId).subscribe((res:any)=>{
          this.empbyid=res.data;
          this.perDaySal=this.empbyid.salary / 30;
          // console.log(this.perDaySal);
          const totalSal=(this.empSalObj.presentDays * this.perDaySal)-this.empSalObj.totalAdvance;
          this.empSalObj.salaryAmount=Number.parseInt(totalSal.toFixed(0));
          console.log(this.empSalObj.salaryAmount);
         
   })
   

    
  }

}
