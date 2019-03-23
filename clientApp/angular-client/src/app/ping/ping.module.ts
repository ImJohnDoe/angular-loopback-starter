import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PingComponent } from './ping.component';

@NgModule({
  declarations: [PingComponent],
  exports: [PingComponent],
  imports: [
    CommonModule
  ]
})
export class PingModule { }
