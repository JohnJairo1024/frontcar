import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { MenuprincipalComponent } from './components/menuprincipal/menuprincipal.component';
import { MessageComponent } from './components/message/message.component';
import { CrearmecanicoComponent } from './components/crearmecanico/crearmecanico.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    CrearmecanicoComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    MenuprincipalComponent,
    MessageComponent,
    CrearmecanicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
