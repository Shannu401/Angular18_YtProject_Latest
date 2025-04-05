import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  //string, boolean, number, date, object, array, null, undefined

  // firstName : string = "Angular Tutorial";
  // version = "Version 18";
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = 'button';
  // selectedState : string = 'AP';

  // showAlertMessage(){
  //   alert("Welcome to the Angular 18 Tutorial");
  // }

  // showMessage(msg: string){
  //   alert(msg);
  // }





  roleList: IRole[] = [];
  changeRoleId!: number;

  //constructor(private hc: HttpClient){}
  hc = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
      this.hc.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res:any) => {
        this.roleList = res.data;
      })
  }





  
}
