export interface getAtendance{
    empName: string
  empContactNo: string
  employeeId: number
  attendanceDate: Date
  attendanceId: number
  inTime: Date
  outTime: Date
  isFullDay: boolean
}
export class postAtendance{
    attendanceId!: number
  employeeId!: number
  attendanceDate!: Date|null|string
  inTime!: Date|null|string
  outTime!: Date|null|string
  isFullDay!: boolean

  // constructor(){
  //   this.attendanceId=0;
  //   this.employeeId=0;
  //   this.attendanceDate!=undefined;
  //   this.inTime!=undefined;
  //   this.outTime!=undefined;
  //   this.isFullDay!=undefined;
  // }
  
}