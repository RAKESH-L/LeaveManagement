import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataRequest } from '../model/Approve-deny.model';
import { Employee } from '../model/employee.model';
import { Leave } from '../model/leave.model';
import { Status } from '../model/status.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  addEmployeeDetails(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>('http://localhost:1400/insert/employee', employee);
  }

  getEmployeeRecords(): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:1400/employee/all');
  }

  searchEmployee(id: string): Observable<Employee>{
    return this.http.get<Employee>('http://localhost:1400/employee/one/' + id);
  }
  addEmployeeLeave(leave: Leave) : Observable<Leave>{
    return this.http.post<Leave>('http://localhost:1400/insert/leave', leave);
  }
  getEmployeeLeaveRecords(): Observable<Leave[]>{
    return this.http.get<Leave[]>('http://localhost:1400/leaves/all');
  }
  postLeaveRequest(status: Status): Observable<Status>{
    return this.http.post<Status>('http://localhost:1400/insert/employeeStatus', status);
  }
  getAllEmployeeStatus(): Observable<Status[]>{
    return this.http.get<Status[]>('http://localhost:1400/get/all/status');
  }
  ApproveRequest(id: string, request: DataRequest): Observable<DataRequest>{
    return this.http.post<DataRequest>('http://localhost:1400/update/employee/status/' + id, request);
  }
  DeniedRequest(id: string, request: DataRequest): Observable<DataRequest> {
    return this.http.post<DataRequest>('http://localhost:1400/update/employee/status/' + id, request);
  }

}
