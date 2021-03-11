import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';
  notification=2;
  showSpinner=false;
  opened=false;

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
}
