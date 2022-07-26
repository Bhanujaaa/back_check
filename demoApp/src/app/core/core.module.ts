import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './add/add.component';
import { OutComponent } from './out/out.component';
import { ShowstudComponent } from './showstud/showstud.component';
import { Use1Component } from './use1/use1.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { AllstudComponent } from './allstud/allstud.component';
import { InWinComponent } from './in-win/in-win.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AddComponent,
    OutComponent,
    ShowstudComponent,
    Use1Component,
    HomeComponent,
    InputComponent,
    AllstudComponent,
    InWinComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class CoreModule { }
