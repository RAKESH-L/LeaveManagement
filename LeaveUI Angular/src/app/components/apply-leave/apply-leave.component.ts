import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/model/employee.model';
import { Leave } from 'src/app/model/leave.model';
import { Status } from 'src/app/model/status.model';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  id:string;
  d1: string;
  d2: string;
  name: string;
  employee: Employee;
  leaveData: Leave;
  statusData: Status;
  days: string;
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.name = localStorage.getItem('name');

    this.libraryService.searchEmployee(this.id).subscribe(data=>{
      this.employee = data
    });
    console.log(this.employee.id);
  }
  onFormSubmit(leaveForm: NgForm){
    let leave: Leave={
      startDate: leaveForm.value.startDate,
      endDate: leaveForm.value.endDate,
      days: leaveForm.value.days,
      leaveType: leaveForm.value.leaveType,
      leaveReason: leaveForm.value.leaveReason
    }
    this.libraryService.addEmployeeLeave(leave).subscribe(data=>{
      this.leaveData = data;
    });
    let status: Status={
      name: this.name,
      startDate: leaveForm.value.startDate,
      endDate: leaveForm.value.endDate,
      days: leaveForm.value.days,
      leaveType: leaveForm.value.leaveType,
      leaveReason: leaveForm.value.leaveReason,
      status: 'pending',
      employeeId: this.id
    }
    this.libraryService.postLeaveRequest(status).subscribe(data=>{
      this.statusData = data;
    });
    confirm("Are you sure do you want to submit?")
  }
  

}
