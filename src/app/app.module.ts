import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastyModule } from 'ng2-toasty';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import { AppRountingModule } from './app-routing.module';
import { FuncionarioModule } from './funcionario/funcionario.module';

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
    FuncionarioModule,
    AppRountingModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
