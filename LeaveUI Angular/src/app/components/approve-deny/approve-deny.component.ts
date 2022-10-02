import { Component, OnInit } from '@angular/core';
import { DataRequest } from 'src/app/model/Approve-deny.model';
import { Status } from 'src/app/model/status.model';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-approve-deny',
  templateUrl: './approve-deny.component.html',
  styleUrls: ['./approve-deny.component.css']
})
export class ApproveDenyComponent implements OnInit {

  id: string;
  statusArry: Status[];
  approve: DataRequest;
  denied: DataRequest;
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.getAllEmployeeStatus().subscribe(data=>{
      this.statusArry = data;
    });
  }
  approveRequest(id: string){
    let request: DataRequest={
      status: 'Approved'
    }
    this.libraryService.ApproveRequest(id, request).subscribe(data=>{
      this.approve = data;
    });
    confirm("Do you want to Approve the request?")
  }
  denyRequest(id: string){
    let request: DataRequest={
      status: 'Denied'
    }
    this.libraryService.DeniedRequest(id, request).subscribe(data=>{
      this.denied = data;
    });
    confirm("Do you want to Deny the request?")
  }

}
