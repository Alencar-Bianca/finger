import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from './form/form.component'
import {LoginComponent} from './login/login.component'
import{ListComponent}from './list/list.component'

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'cadastro', component: FormComponent},
  {path:'edit/:id', component: FormComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
