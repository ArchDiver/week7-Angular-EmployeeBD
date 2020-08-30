import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { AuthGuard } from './auth/auth.guard'


const routes: Routes = [
  {
    path:'home', component:EmpHomeComponent
  },
  {
    path: 'info', component: EmpInfoComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }