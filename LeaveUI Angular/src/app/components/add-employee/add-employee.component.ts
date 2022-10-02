import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/model/employee.model';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeArry:Employee;
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
  }
  onFormSubmit(employeeForm: NgForm){
    let employee: Employee={
      name: employeeForm.value.name,
      leaveBalance: employeeForm.value.leaveBalance
    }
    console.log(employee);
    this.libraryService.addEmployeeDetails(employee).subscribe(data=>{
      this.employeeArry = data;
    });
    confirm("Do you want to add this Employee?")
  }

}
