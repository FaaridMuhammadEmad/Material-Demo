import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
