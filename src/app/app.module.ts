import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from 'custom-components';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
