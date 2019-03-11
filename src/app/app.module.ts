import { FuncionarioModule } from './funcionario/funcionario.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastyModule } from 'ng2-toasty';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ToastyModule.forRoot(),
    FuncionarioModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
