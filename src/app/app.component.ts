import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map,startWith } from 'rxjs/operators';
import { CustomerSnackBarComponentComponent } from './customer-snack-bar-component/customer-snack-bar-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-material';
  notification=2;
  showSpinner=false;
  opened=false;
  selectedValue:any;
  options:string[]=['Angular','React','Android'];
  objectOptions=[
    {name:  'Angular'},
    {name:  'React'},
    {name:  'Android'},
    {name:  'Vue '},
  ];

  maxDate = new Date();
  minDate= new Date(2019,3,10);

  myControl = new FormControl();
  filteredOptions: Observable<string[]> | undefined;

  constructor(private snackBar: MatSnackBar,public dialog: MatDialog){}

  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },5000)
  }

  log(state:any){
    console.log(state)
  }
  logChange(value:any){
    console.log(value)
  }

  displayFn(subject:any){
    return subject ? subject.name : undefined;
  }

  ngOnInit(){
    this.filteredOptions= this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=> this._filter(value))
    );
  }

  private _filter(value:any){
    const filterValue = value.toLowerCase();
    return this.options.filter(option => 
      option.toLowerCase().includes(filterValue )
      );
  }

  dateFilter = (date: { getDay: () => any; }) =>{
    const day = date.getDay();
    console.log("DDD",day != 0 && day !=6)
    return day != 0 && day !=6;
  }

  openSnackbar(message:any,action:any){
    let snackBarRef = this.snackBar.open(message,action,{duration:2000})

    snackBarRef.afterDismissed().subscribe(()=>{
      console.log("The snackbar was dismissed")
    });
    
    snackBarRef.onAction().subscribe(()=>{
      console.log("The snackbar was triggered")
    });
  }

  openCustomSnackBar(){
    this.snackBar.openFromComponent(CustomerSnackBarComponentComponent,{duration:2000})
  }

  openDialog(){
    this.dialog.open(CustomerSnackBarComponentComponent);
  }
}



