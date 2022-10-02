import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {

  employeeArr: Employee[];
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.getEmployeeRecords().subscribe(data=>{
      this.employeeArr = data;
    })
  }

}
