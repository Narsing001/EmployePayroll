export interface empLeves{
    empName: string
  empContactNo: string
  employeeId: number
  leaveDate: string
  leaveId: number
  leaveReason: string
  noOfFullDayLeaves: number
  noOfHalfDayLeaves: number
}

export class postemployeleve{
    leaveId!: number
  employeeId!: number
  leaveDate!: string|null|Date
  leaveReason!: string
  noOfFullDayLeaves!: number
  noOfHalfDayLeaves!: number
}