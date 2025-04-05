import { Component, inject, OnInit } from '@angular/core';
import { APIResponseModel, IDesignation } from '../../model/interface/role';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationList: IDesignation[] = [];
  masterService = inject(MasterService)

  ngOnInit(): void {
    this.masterService.getAllDesignations().subscribe((res:APIResponseModel)=> {
      this.designationList = res.data;
    },error => {
      alert('API Error / Network Down.')
    }
  )}

}
