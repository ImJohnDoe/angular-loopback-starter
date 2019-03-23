import { CoreModule } from './core/core.module';
import { PingModule } from './ping/ping.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
