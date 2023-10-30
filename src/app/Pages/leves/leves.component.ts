import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { empLeves, postemployeleve } from 'src/app/extraClassAndInterface/EmpLeves';
import { EmployeService } from 'src/app/Services/employe.service';
import { LevesServService } from 'src/app/Services/leves-serv.service';

@Component({
  selector: 'app-leves',
  templateUrl: './leves.component.html',
  styleUrls: ['./leves.component.css']
})
export class LevesComponent implements OnInit {
levesArray:empLeves[]=[]
empData:any;
update:boolean=false
postDataObj:postemployeleve=new postemployeleve(); 
  constructor(private leveserve:LevesServService,
    private empServe:EmployeService
    ,private datePipe:DatePipe) { }
 
  ngOnInit(): void {
    this.getAllLeves();
    this.getEmployeData();
  }
  resetObj(){
    this.postDataObj.employeeId=0;
    this.postDataObj.leaveDate='';
    this.postDataObj.leaveId=0;
    this.postDataObj.leaveReason='';
    this.postDataObj.noOfFullDayLeaves=0;
    this.postDataObj.noOfHalfDayLeaves=0;
  }
  getAllLeves(){
    this.leveserve.AllLeves().subscribe((res:any)=>{
        this.levesArray=res.data
    })
  }

  postAllLeves(){
    this.leveserve.postLeves(this.postDataObj).subscribe((res:any)=>{
      console.log(res)
      if(res.result){
        alert(res.message)
        this.getAllLeves();
       
      }
      else{
       alert(res.message)
      }
    })
  }

  getEmployeData(){
    this.empServe.allemploye().subscribe((res:any)=>{
        this.empData=res.data;
    })
  }
  getEmpLevesById(id:number){
        this.leveserve.getLevesById(id).subscribe((res:any)=>{
          this.postDataObj=res.data[0];
          this.postDataObj.leaveDate=this.datePipe.transform(this.postDataObj.leaveDate,'yyyy-MM-dd')
          console.log(this.postDataObj);
          this.update=true;
        })
  }
  updateData(){
    this.leveserve.updateEmploye(this.postDataObj).subscribe((res:any)=>{
     debugger
      if(res.result){
   
        alert(res.message);
        this.getAllLeves();
       
       }
       this.resetObj()
    })
  }
  
}
