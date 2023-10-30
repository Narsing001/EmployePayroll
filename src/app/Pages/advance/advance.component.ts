import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Epadvance, postEpAdvance } from 'src/app/extraClassAndInterface/EmpAdvance';
import { AdvanceService } from 'src/app/Services/advance.service';
import { EmployeService } from 'src/app/Services/employe.service';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css']
})
export class AdvanceComponent implements OnInit {
   advanceArray:Epadvance[]=[];
   advanceObj:postEpAdvance=new postEpAdvance();
   empData:any[]=[];
   update:boolean=false;
  constructor(private advanceServ:AdvanceService,private empserv:EmployeService,private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.getAllEmpAdvance();
    this.getEmpData();
  }

  resetObj(){
   this.advanceObj.advanceId=0,
   this. advanceObj.employeeId=0,
   this. advanceObj.advanceDate=''
   this. advanceObj.advanceAmount=''
   this. advanceObj.reason=''
  }

  getAllEmpAdvance(){
    this.advanceServ.allEmpAdvance().subscribe((res:any)=>{
       this.advanceArray=res.data;
       console.log(this.advanceArray);
    })
  }

  getAddEmpAdvance(){
    this.advanceServ.addEmployeAdvance(this.advanceObj).subscribe((res:any)=>{
         if(res.result){
            this.advanceObj=res.data;
            alert(res.message)
            this.resetObj();
            this.getAllEmpAdvance();
         }
         else{
              alert(res.message)
         }
    })
  }
  getEmpData(){
    this.empserv.allemploye().subscribe((res:any)=>{
      this.empData=res.data;
    })
  }

  getAtedanceByAdvanceId(adId:number){
        this.advanceServ.allEmpAdvance().subscribe((res:any)=>{
           const edata=res.data.filter((d:any)=>{
            return d.advanceId==adId;
           });

           this.advanceObj=edata[0];
           this.advanceObj.advanceDate=this.datePipe.transform(this.advanceObj.advanceDate,'yyyy-MM-dd');
           this.update=true;
          })
  }

  getUpdateAdvance(){
    this.advanceServ.updateEmployeAdvance(this.advanceObj).subscribe((res:any)=>{
      if(res.result){
        this.advanceArray=res.data;
          this.getAllEmpAdvance();
          alert(res.message)
      } 
      else{
        alert(res.message)
      }  
      
          
    })

    
  }
  getDeleteadvance(id:number){
     this.advanceServ.DeleteEmploye(id).subscribe((res:any)=>{
       if(res.result){
        alert(res.message);
       }
     })
  }

}
