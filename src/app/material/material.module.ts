import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
