import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-customer-snack-bar-component',
  templateUrl: './customer-snack-bar-component.component.html',
  styleUrls: ['./customer-snack-bar-component.component.css']
})
export class CustomerSnackBarComponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    
  }

}
