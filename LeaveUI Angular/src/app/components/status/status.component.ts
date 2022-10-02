import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/model/status.model';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  statusArray: Status[];
  constructor(private leaveService: LibraryService) { }

  ngOnInit(): void {
    this.leaveService.getAllEmployeeStatus().subscribe(data=>{
      this.statusArray = data;
    });
  }

}
