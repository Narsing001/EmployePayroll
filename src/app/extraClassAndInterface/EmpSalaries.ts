export interface empSaleries{
    empName: string
  empContactNo: string
  employeeId: number
  salaryDate: string
  presentDays: number
  salaryAmount: number
  salaryId: number
  totalAdvance: number
}

export class postSalary{
    salaryId!:number;
    employeeId!:number;
    salaryDate!:string|Date|null;
    totalAdvance!:number;
    presentDays!:number
    salaryAmount!:number
}