import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from './login/login.component';

import { SecurityService } from './services/security.service';
import { SecurityRoutingModule } from './security-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SecurityRoutingModule
  ],
  providers:[SecurityService]
})
export class SecurityModule { }
