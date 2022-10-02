import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeArray: Employee;
  constructor(private libraryService: LibraryService, private router:Router) { }

  ngOnInit(): void {
  }
  onFormSubmit(searchForm: NgForm){
    this.libraryService.searchEmployee(searchForm.value.id).subscribe(data=>{
      this.employeeArray = data;
    });
    console.log(this.employeeArray);
  }
  applyLeave(id: number, name: string){
    console.log(id);
    localStorage.setItem('id',String(id));
    localStorage.setItem('name',String(name));
    this.router.navigateByUrl('/apply-leave');
  }

}
