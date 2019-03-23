import { PingService } from './services/ping.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [PingService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
