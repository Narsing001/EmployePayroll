import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { getAtendance, postAtendance } from 'src/app/extraClassAndInterface/EmpAtendance';
import { AtendanceService } from 'src/app/Services/atendance.service';
import { EmployeService } from 'src/app/Services/employe.service';

@Component({
  selector: 'app-atendance',
  templateUrl: './atendance.component.html',
  styleUrls: ['./atendance.component.css']
})
export class AtendanceComponent implements OnInit {
  atendanceArray:getAtendance[]=[];
  empdata:any[]=[];
  btnupdate:boolean=false;
  postDataAtendance:postAtendance=new postAtendance();
  constructor(private atendserv:AtendanceService
    ,private empserv:EmployeService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllAtendance();
    this.getEmployedata()
  }
  reset(){
    this.postDataAtendance.attendanceDate='';
    this.postDataAtendance.attendanceId=0;
    this.postDataAtendance.employeeId=0;
    this.postDataAtendance.inTime='';
    this.postDataAtendance.outTime='';
    this.postDataAtendance.isFullDay=false;
  }

  getAllAtendance(){
       this.atendserv.allEmployeAtendance().subscribe((res:any)=>{
         this.atendanceArray=res.data;
         console.log();
       })
  }

  getAddEmployeData(){
        this.atendserv.addAtendanceEmploye(this.postDataAtendance).subscribe((res:any)=>{
          if(res.result){
            alert(res.message);
            this.getAllAtendance();
          }
          else{
            alert(res.message)
          }
        })
  }
  getAtendanceByAtendanceId(id:number){
      this.atendserv.allEmployeAtendance().subscribe((res:any)=>{
       const udata=res.data.filter((d:any)=>{
        return d.attendanceId==id;
       });
      //  console.log(udata[0]);
        this.postDataAtendance=udata[0];
        this.postDataAtendance.attendanceDate = this.datePipe.transform(this.postDataAtendance.attendanceDate,'yyyy-MM-dd');
        this.postDataAtendance.inTime=this.datePipe.transform(this.postDataAtendance.inTime,'HH:mm:ss')
        this.postDataAtendance.outTime=this.datePipe.transform(this.postDataAtendance.outTime,'HH:mm:ss')
         this.btnupdate=true;
      })
  }  
  getUpdateAtendanceEmploye(){
     this.atendserv.updateAtendanceEmploye(this.postDataAtendance).subscribe((res:any)=>{
       if(res.result){
        this.getAllAtendance();
        alert(res.message);
        this.reset();
      
       }
       else{
        alert(res.message);

       }
     })
  }
  getDeleteEmpAtendance(id:number){
       this.atendserv.deleteAtendanceEmploye(id).subscribe((res:any)=>{
        alert(res.message);
       })
  }
  getEmployedata(){
    this.empserv.allemploye().subscribe((res:any)=>{
      this.empdata=res.data;
    })
  }

  


}
