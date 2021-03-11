import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,startWith } from 'rxjs/operators';

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

  myControl = new FormControl();
  filteredOptions: Observable<string[]> | undefined;

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
}



